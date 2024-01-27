import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Passkey, PasskeyRegistrationResult} from 'react-native-passkey';

export default function App() {
  useEffect(() => {
    const checkPasskeySupport = async () => {
      const isSupported: boolean = Passkey.isSupported();
      console.log('Passkey is supported:', isSupported);

      const registerOptions = {
        challenge: 'dQDksd8aisqN5iNIbMLLEaAstIOqwTSSFsiWXSJqjQM',
        rp: {
          id: 'passkeys-codelab.glitch.me',
          name: 'CredMan App Test',
        },
        pubKeyCredParams: [
          {
            type: 'public-key',
            alg: -7,
          },
          {
            type: 'public-key',
            alg: -257,
          },
        ],
        authenticatorSelection: {
          authenticatorAttachment: 'platform',
          residentKey: 'discouraged',
        },
        user: {
          id: 'EARytax44uH7PjD48ajsqu3RxwUvU5ONt55QwXhXBPUUyiXiXCbC11CB2dPQtnxy0XjiSPVECIOr0jDg7LAeEg',
          name: 'yakir',
          displayName: 'yakir',
        },
      };

      try {
        const registerResult: PasskeyRegistrationResult =
          await Passkey.register(registerOptions);
        console.log('registerResult: ', registerResult);
      } catch (e) {
        console.log(e);
      }
    };

    checkPasskeySupport();
  }, []);

  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
}
