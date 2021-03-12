class Generator {

    /**
     * @param {String} dynamicContent Represents a single element.
     * @return {ChildNode}
     */
    static htmlToElement(dynamicContent) {
        const template = document.createElement(`template`);

        dynamicContent = dynamicContent.trim();
        template.innerHTML = dynamicContent;

        return template.content.firstChild;
    }
}
