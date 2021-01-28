// Map
export function map() {
    if (document.querySelector("#map")) {
        ymaps.ready(function(){
            var myMap = new ymaps.Map("map", {
                center: [61.64043406182419,50.82353449999986],
                zoom: 17,
                controls: []
            });

            var myPlacemark = new ymaps.Placemark([61.64043406182419,50.82353449999986], {}, {

                preset: 'islands#icon',
                iconColor: '#EF0E15'
            });
            myMap.geoObjects.add(myPlacemark);

            //отключаем зум колёсиком мышки
            myMap.behaviors.disable('scrollZoom');
            
            //на мобильных устройствах... (проверяем по userAgent браузера)
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                //... отключаем перетаскивание карты
                myMap.behaviors.disable('drag');
            }
        });
    }
}