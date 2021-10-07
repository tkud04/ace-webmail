import { Text, Linking, AsyncStorage} from 'react-native';
//import RNPaystack from 'react-native-paystack';
//import {showMessage, hideMessage} from 'react-native-flash-message';
 
export function tryParseJSON(jsonString){
    try {
        var o = JSON.parse(jsonString);

        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object", 
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:
        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) { }

    return false;
}

export function getInbox(){
	
let ret = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    from: 'First Item',
    subject: 'First Item',
    msg: 'First Item',
  },
  {
    id: 'bd7asdfea-c1b6-46c2-aed5-3ad53abb28ba',
    from: 'Second Item',
    subject: 'Second Item',
    msg: 'Second Item',
  },{
    id: 'bd7acmkea-s2b1-46c2-aed5-3ad53abb28ba',
    from: 'Third Item',
    subject: 'Third Item',
    msg: 'Third Item',
  },{
    id: 'bdbzcbea-x36y-46c2-aed5-3ad53abb28ba',
    from: 'Fourth Item',
    subject: 'Fourth Item',
    msg: 'Fourth Item',
  },
];

return ret;
}

export function fetchInbox(){
	
let ret = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    from: 'First Item',
    subject: 'First Item updated',
    msg: 'First Item updated',
  },
  {
    id: 'bd7asdfea-c1b6-46c2-aed5-3ad53abb28ba',
    from: 'Second Item',
    subject: 'Second Item updated',
    msg: 'Second Item updated',
  },{
    id: 'bd7acmkea-s2b1-46c2-aed5-3ad53abb28ba',
    from: 'Third Item',
    subject: 'Third Item updated',
    msg: 'Third Item updated',
  },{
    id: 'bdbzcbea-x36y-46c2-aed5-3ad53abb28ba',
    from: 'Fourth Item',
    subject: 'Fourth Item updated',
    msg: 'Fourth Item updated',
  },
];

return ret;
}