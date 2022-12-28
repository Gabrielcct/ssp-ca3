/** ********************** VARIABLES AND IMPORTS ********************** **/    
const   http = require('http'), //HTTP server
        path = require('path'),
        express = require('express'), //Handling HTTP requests & routing
        fs = require('fs'), //File system functionalities
        xmlParse = require('xslt-processor').xmlParse, //XML handling
        xsltProcess = require('xslt-processor').xsltProcess, //XSLT handling
        router = express(), //Init our router
        xml2js = require('xml2js'),
        server = http.createServer(router); //Init our server
const { Validator } = require('node-input-validator');// added validator https://www.npmjs.com/package/node-input-validator       
 
/** ********************** SET ROUTER ********************** **/         
router.use(express.static(path.resolve(__dirname,'views')));
router.use(express.urlencoded({extended: true}));
router.use(express.json());

       

/** ********************** HELPER METHODS ********************** **/        
/**
 * Read a XML file and parse it as string, returning it as JSON
 * @param {*} filename 
 * @param {*} cb 
 */        
function XMLtoJSON(filename, cb){
    let filepath = path.normalize(path.join(__dirname, filename));
    fs.readFile(filepath, 'utf8', function(err, xmlStr){
        if (err) throw (err);
        xml2js.parseString(xmlStr, {}, cb);
    });
};

/**
 * Use xml2js library to add json changed row to xml file
 * @param {*} filename 
 * @param {*} obj 
 * @param {*} cb 
 */
function JSONtoXML(filename, obj, cb){
    let filepath = path.normalize(path.join(__dirname, filename));
    let builder = new xml2js.Builder();
    let xml = builder.buildObject(obj);
    fs.unlinkSync(filepath);
    fs.writeFile(filepath, xml, cb);
};

/**
 * To be used on all get responses
 * @param {*} res 
 * @param {*} xmlName 
 * @param {*} xslName 
 */
function createGetResponse(res, xmlName, xslName){
    res.writeHead(200, {'Content-Type' : 'text/html'});

    let xml = fs.readFileSync(xmlName, 'utf8'),
        xsl = fs.readFileSync(xslName, 'utf8');

    xml = xmlParse(xml);
    xsl = xmlParse(xsl);

    let html = xsltProcess(xml, xsl);

    res.end(html.toString());    
}


/** ********************** ENDPOINTS ********************** **/  

/**
 * Endpoint to get XML file for shop
 * Type: GET
 * UrL: '/get/html'
 * Provides: XML transformed to html with xsl (as string)
 */
router.get('/get/html', function(req, res) {
    return createGetResponse(res, 'menu.xml', 'menu.xsl')
});

/**
 * Endpoint to get XML file for cards
 * Type: GET
 * UrL: '/get/cards'
 * Provides: XML transformed to html with xsl (as string)
 */
router.get('/get/cards', function(req, res) {
    return createGetResponse(res, 'cards.xml', 'cards.xsl')
});



/**
 * Endpoint to update XML file
 * Type: POST
 * UrL: '/post/json'
 *  
 **/
router.post('/post/json', function(req, res){
    /**
     * Append json and return it as body
     * @param {*} obj 
     */
    function appendJSON(obj){
        XMLtoJSON('menu.xml', function(err, result) {
            if (err) throw (err);
            // add new listing to xml
            result.menu.category[obj.sec_n].item.push({'listing': obj.listing, 'price': obj.price});
            console.log(JSON.stringify(result, null, " "));
            JSONtoXML('menu.xml', result, function(err){
                if (err) console.log(err);
            });
        });
    };

    // create new validator v
    const v = new Validator(req.body, {
        sec_n: 'required|integer', //position in array so needs to be integer
        listing: 'required',
        price: 'required'
    });
    
    // do validation
    v.check().then(function (matched) {
        // if there are errors
        if (!matched) {
            //send back status 422 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
            res.status(422);
            res.body = v.errors;
        }else{
            appendJSON(req.body);
        }
        
        res.redirect('back');
    });

});

/**
 * Endpoint to delete row from XML file
 * Type: POST
 * UrL: '/post/delete'
 *  
 **/
router.post('/post/delete', function (req,res) {
    function deleteJSON(obj) {
        console.log(obj);
        XMLtoJSON('menu.xml', function(err, result){
            if (err) throw (err);

            delete result.menu.category[obj.section].item[obj.entree];

            JSONtoXML('menu.xml', result, function(err){
                if (err) console.log(err);
            });
        });
    };

    deleteJSON(req.body);

    res.redirect('back');
})

/** ********************** SERVER ********************** **/  
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    const addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port)
});