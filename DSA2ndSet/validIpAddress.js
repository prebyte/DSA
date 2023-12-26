/* validate ip address */

/*
    To validate an IP address, we need to check its format and range.
    For IPv4 addresses, we check if the address consists of four decimal-separated parts,
    each ranging from 0 to 255.
    For IPv6 addresses, we check if the address consists of eight hexadecimal-separated parts,
    each containing 1 to 4 hexadecimal digits. We also need to handle zero compression in IPv6 addresses.
    Additionally, we need to consider edge cases such as leading zeros,
    empty parts, and invalid characters in the address.
*/

function validIpAddress (ip) {
    let parts = ip.split(/[.:]/);
    if (parts.length === 4) {

        // Check IPv4 parts
        for (const part of parts) {
            const num = parseInt(part);
            if (isNaN(num) || num < 0 || num > 255) {
                return false;
            }
        }
        return true;
    } else if (parts.length === 8) {

        // Check IPv6 parts
        for (const part of parts) {
            if (!/^[0-9a-fA-F]{1,4}$/.test(part)) {
                return false;
            }
        }
        return true;
    }

    return false;
}

console.log(validIpAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334"));
console.log(validIpAddress("255.255.255.255"));
console.log(validIpAddress("192.168.0.1"));
console.log(validIpAddress("100.xyz.1.15"));
console.log(validIpAddress("50.35.6"));
