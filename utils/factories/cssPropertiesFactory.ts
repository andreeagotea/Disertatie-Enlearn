import CssProperties from "../entities/cssProperties";

class CssPropertiesFactory {

    generateCssProperties() {
        const cssProperties: CssProperties = new CssProperties();
        cssProperties.setWidth('400px');
        cssProperties.setHeight('200px');
        cssProperties.setBackgroundColor("#C0C0C0");
        cssProperties.setDisplayType("flex");

        return cssProperties;
    }

}

export default CssPropertiesFactory;
