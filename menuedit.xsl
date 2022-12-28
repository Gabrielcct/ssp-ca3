<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:template match="/">
		<table id="menuTable" border="1" class="indent table table-striped table-borderless">
			<thead>
				<tr>
					<th>Remove</th>
					<th>Item</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				<xsl:for-each select="//category">
					<xsl:variable name="category-position" select="position()" />
					<tr>
						<td colspan="3">
							<xsl:value-of select="@name" />
						</td>
					</tr>
					<xsl:for-each select="item">
						<tr id="{position()}">
							<td align="center">
								<button class="btn btn-sml btn-custom btn-danger" onclick="removeItemFromList(this)" data-position="{position()}" data-category="{$category-position}">X</button>
							</td>
							<td>
								<xsl:value-of select="listing" />
							</td>
							<td align="right">
								<xsl:value-of select="price" />
							</td>
						</tr>
					</xsl:for-each>
				</xsl:for-each>
			</tbody>
		</table>
	</xsl:template>
</xsl:transform>