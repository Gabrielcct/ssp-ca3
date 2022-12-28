<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:template match="/">
		<xsl:for-each select="//card">
            <!-- CARD HOLDER -->
            <div class="col-lg-3 col-md-6 mb-3" >
                <!-- CARD -->
                <div class="card">
                    <!-- bootstrap 5 card body -->
                    <div class="card-body text-center">
                        <!-- card title -->    
                        <h5 class="card-title">
                            <input class="form-control cart-title-input" name="card-title-input" id="card-title-input-{position()}">
                                <xsl:attribute name="value">
                                    <xsl:value-of select="title"/>
                                </xsl:attribute>
                            </input>   
                        </h5>
                        <!-- card text -->   
                        <p class="card-text">
                            <textarea class="form-control textarea-text" id="card-text-input-{position()}">
                                <xsl:value-of select="text"/>
                      
                            </textarea>   
                        </p>
                        <div class="col-12">
                            <button class="btn btn-sm btn-warning btn-custom margin-right-15" onclick="editCard(this)" data-position="{position()}">Edit</button>
                            <button class="btn btn-sm btn-danger btn-custom" onclick="removeCard(this)" data-position="{position()}">Delete</button>
                        </div>
                    </div>
                </div>
            </div>       
        </xsl:for-each>
	</xsl:template>
</xsl:transform>
                        