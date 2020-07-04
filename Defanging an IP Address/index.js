////////// 1108. Defanging an IP Address//////////

/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
    return address.replace(/\./g, "[.]");
};

console.log(defangIPaddr("1.1.1.1"));

// const input = "1.1.1.1";
// const output = address.replace(/./g, "[.]");