<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 

<xsl:template match="/">
    <table>
	<xsl:for-each select="cavesCatalogue/caves/cave">
	  <xsl:sort select="@name" data-type="text" order="ascending" />
	  <tr>
        <th class="first">Име</th>
        <th>Област</th>
        <th>Тип</th>
        <th>Денивелация</th>
		<th>Дължина(м)</th>
		<th>Откриване</th>
		<th>Снимка</th>
      </tr>
		<tr class="row-a">
			<td class="first"><b><xsl:value-of select="@name"/></b></td>
			<td><xsl:value-of select="@region"/></td>
			<td><xsl:value-of select="@geology"/></td>
			<td><xsl:value-of select="@denivelation"/></td>
			<td><xsl:value-of select="@length"/></td>
			<td><xsl:value-of select="@discoveryYear"/></td>
			<td>
            <a target="_blank">
                <xsl:attribute name="href">
                    <xsl:value-of select="@photo"/>
                </xsl:attribute>
                <img width="140" height="100">
                    <xsl:attribute name="src">
                        <xsl:value-of select="@photo"/>
                    </xsl:attribute>
                </img>
            </a>
			</td>
		</tr>
		<tr class="row-b">
			<td><font color="#8C9F0D">Описание:</font></td>
			<td colspan="7"><xsl:value-of select="description"/><br/><br/></td>
		</tr>
    </xsl:for-each>
    </table>
</xsl:template>
</xsl:stylesheet> 