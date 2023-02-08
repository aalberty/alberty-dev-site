var app = angular.module('mainApp', []);

app.controller('mainCtrl', function ($scope) {
    loadLib();

    function loadLib () {
        //Dirs containing html, controller, and css
        let standardDirs = [
            'header',
            //'footer'
        ];

        standardDirs.forEach(function (dir) {
            addStandardDir(dir);
        });
    }

    function addStandardDir (dirName) {
        let filePath = "lib/";
        let fileTypesObj = {
            html: {
                nameSuffix: "",
                extension: ".html"
            },
            style: {
                nameSuffix: "",
                extension: ".css"
            },
            controller: {
                nameSuffix: "Ctrl",
                extension: ".js"
            }
        };

        for (fileType in fileTypesObj) {
            filePath += dirName + "/" + dirName + fileType.nameSuffix + fileType.extension;
            angular.element(document.getElementsByTagName('head'))
            .append(
                angular.element('<script src="' + filePath + '" />')
            );
        }
    } 
});