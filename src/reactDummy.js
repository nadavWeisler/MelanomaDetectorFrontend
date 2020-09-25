export const initReactDummy = () => {
  navigator.camera = {
    cleanup: () => console.log("camera cleanup"),
    getPicture: () => {
      console.log("camera getPicture");
      return 1;
    },
  };
  window.cordova = {
    platformId: "browser",
  };
  window.Camera = {
    PictureSourceType: {},
  };
};
