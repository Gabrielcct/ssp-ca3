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
                            <xsl:value-of select="title" />
                        </h5>
                        <!-- card text -->   
                        <p class="card-text">
                            <xsl:value-of select="text" />
                        </p>
                    </div>
                </div>
            </div>       
        </xsl:for-each>
	</xsl:template>
</xsl:transform>
                        