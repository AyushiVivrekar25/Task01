
    <img src="http://techfunda.com/HTPictures/Generics/5-635898849972807270.JPG" id="myImage" width="100" height="150">
    <input type="button" onclick="changeImage()" value="Change" />
    <script>
        function changeImage() {
            var image = document.getElementById('myImage');
            if (image.src.match("piano.JPG")) {
                image.src = "piano.JPG";
            }
            else {
                image.src = "harmonium.JPG";
            }
        }
    </script>