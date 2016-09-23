/**
 * Created by liu on 16-7-22.
 */
appServices
    .factory('JumpPagService', function ($location, $window) {
        return {
            path: function (url) {
                if ($location.url() == url) {
                    $window.location.reload();
                } else {
                    $location.path(url)
                }
            }
        }
    });