import { PermissionsAndroid, Alert } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';


 export const requestDownloadPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: "Cool Pdf Download Permission",
                    message:
                        "Cool Pdf Download App needs access to your External memory " +
                        "so you can take store the pdf file.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can download the pdf");
                buttonHandler();
            } else {
                console.log("download to extrnal permission denied");
            }
        } catch (err) {
            console.warn('permission error', err);
        }
    };
    const { config, fs } = RNFetchBlob;

    let PictureDir = fs.dirs.PictureDir // this is the pictures directory. You can check the available directories in the wiki.
    let options = {
        fileCache: true,
        addAndroidDownloads: {
            useDownloadManager: true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
            notification: true,
            path: PictureDir + "/me_" + Math.floor(new Date().getTime() + new Date().getSeconds() / 2), // this is the path where your downloaded file will live in
            description: 'Downloading image.'
        }
    }
    let buttonHandler = () => {
        config(options).fetch('GET', "http://www.africau.edu/images/default/sample.pdf")
            .then((res) => {
                Alert.alert("Success Downloaded");
            })
            .catch((err) => {
                console.log('fetch error', err)
            })
    }
