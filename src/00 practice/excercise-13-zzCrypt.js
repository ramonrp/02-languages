// ZZCrypt
var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
  let result = "";
  for (let letter of secret) {
    let index = cipher.indexOf(letter);
    if (index !== -1) {
      result += plain[index];
    } else {
      result += letter;
    }
  }
  return result;
}

console.log(decrypt(secret));
