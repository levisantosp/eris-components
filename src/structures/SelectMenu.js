import {Constants} from "eris"

export default class SelectMenu {
    constructor() {
        this.type = Constants.ComponentTypes.ACTION_ROW
        this.components = [{
            type: Constants.ComponentTypes.SELECT_MENU,
            custom_id: null,
            placeholder: null,
            options: [],
            min_values: 1, // Minimum amount of selections the user can make (you can change this)
            max_values: 1, // Maximum amount of selections the user can make (you can change this)
            disabled: null
        }]
    }

    /**
     * @param {string} placeholder Select menu placeholder
     * @returns {SelectMenu}
     */
    setPlaceholder(placeholder) {
        return this.components[0].placeholder = placeholder
    }

    /**
     * @param {string} label Select menu text
     * @param {string} description Selec menu description
     * @param {string} value Select menu value
     * @param {string} emoji Select menu emoji
     * @returns {SelectMenu}
     */
    addOption(label, description, value, emoji) {
        return this.components[0].options.push({label, description, value, emoji: {name: emoji}})
    }
    
    /**
     * 
     * @param {boolean} disabled 
     * @returns {SelectMenu}
     */
    setDisabled(disabled = true) {
        return this.components[0].disabled = disabled
    }

    /**
     * @param {string} customID Select menu ID
     * @returns {SelectMenu}
     */
    setCustomID(customID) {
        return this.components[0].custom_id = customID
    }
}