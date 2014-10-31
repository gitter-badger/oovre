var devPath = '~/Projects/JS/oovre-uploads/';

Images = new FS.Collection('images', {
	stores: [new FS.Store.FileSystem('default', {path: devPath})]
});