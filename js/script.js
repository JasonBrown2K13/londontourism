$(document).ready(function () {

    //Set the following elements to closed
    var dayOutCount = 0;
    var landmarksSectionOpen = false;
    var attractionsSectionOpen = false;
    var transportSectionOpen = false;
    var dayOutModalOpen = false;

    console.log("document ready");

    $('#cca-close').click(function (e) {
            sendTrackingEvent('CCA Modal', 'Closed');
            toggleModal();
        })

    $('#cca-cancel').click(function (e) {
            sendTrackingEvent('CCA Modal', 'Cancel Button');
            toggleModal();
        })

    $('#find-out-more').click(function (e) {
        sendTrackingEvent('Find Out More button', 'clicked');
            window.location.href = 'http://google.co.uk';           
        })

        $('#add-to-day-out').click(function (e) {
            var img = $('#selection-image').attr('src');
            var title = $('#selection-message').text();
            var description = $('#selection-description').text();
            //console.log("img = " + img + "title = " + title + "description = " + description);
            dayOutCount++;
            if (dayOutCount < 4) {
                var contentTitle = $('#dayout-title' + dayOutCount);
                contentTitle.text(title); 
                var contentDescription = $('#dayout-description' + dayOutCount);
                contentDescription.text(description);
                var contentImage = $('#selection-image-dayout' + dayOutCount);
                contentImage.attr('src', img);
                window.alert('Added to your day out!');
                sendTrackingEvent('Item added to day out', title);
                toggleModal();
            }
        })

        $('#dayout-hero').click(function (e) {
            toggleDayOut();
        })

        $('#dayout-open').click(function (e) {
            toggleDayOut();
        })

        $('#dayout-close').click(function (e) {
            toggleDayOut();
        })

        $('#dayout-cancel').click(function (e) {
            sendTrackingEvent('Cancel dayout', "Cancel button pressed");
            toggleDayOut();
        })

        $('#book').click(function (e) {
            sendTrackingEvent('Book items', "Book button pressed");
            window.alert("The items in your day out have been booked!");
            toggleDayOut();
        })

        $('#cancel-items').click(function (e) {
            sendTrackingEvent('Cancel items', "Cancel items button pressed");
            window.alert("The items in your day out have been cancelled.");
            toggleDayOut();
        })

        $('#landmarks-close').click(function (e) {
            $("#landmarks-section").slideToggle('fast');
            sendTrackingEvent('Landmarks options', "Close button");
        })

        $('#attractions-close').click(function (e) {
            $("#attractions-section").slideToggle('fast');
            sendTrackingEvent('Attractions options', "Close button");
        })

        $('#transport-close').click(function (e) {
            $("#transport-section").slideToggle('fast');
            sendTrackingEvent('Transport options', "Close button");
        })

        $("#landmarks-hero").click(function () {
            landmarksSectionOpen = !landmarksSectionOpen;
            var state = (landmarksSectionOpen) ? "Open" : "Closed";
            sendTrackingEvent('Landmarks hero button', state);
            $("#landmarks-section").slideToggle('fast');
        });
      
        $("#attractions-hero").click(function () {
            attractionsSectionOpen = !attractionsSectionOpen;
            var state = (attractionsSectionOpen) ? "Open" : "Closed";
            sendTrackingEvent('Attractions hero button', state);
            $("#attractions-section").slideToggle('fast');         
        });

        $("#transport-hero").click(function () {
            transportSectionOpen = !transportSectionOpen;
            var state = (transportSectionOpen) ? "Open" : "Closed";
            sendTrackingEvent('Transport hero button', state);
            $("#transport-section").slideToggle('fast');
            
        });

        var selection, selectionImage, selectionImage;
        selectionImage = $('#selection-image');

        function sendTrackingEvent(action, label) {
            ga('send', 'event', 'Discover London', action, label);
        }

        /*Function to check tracking of events before uploadng to server.
        Comment out  BEFORE uploading!
        function ga(a, b, c, d, e) {
            console.log('tracking: action = ' + d + ', label = ' + e);
        }*/

        $("a.selection").each(
            function (index, item) {
                $(item).click(function (e) {
                    $("#selection-section").animate({ left: '250px' });
                    var siblings, img, description;
                    siblings = $("a.selection").siblings("figure.image").find("img");
                    img = $(item).siblings("figure.image").find("img");
                    selection = $(item).siblings("p.card-title").text();
                    description = $(item).siblings("p.card-description").text();
                    selectionImage.attr('src', img.attr('src'));
                    $('#selection-message').text(selection);
                    $('#selection-description').text(description);
                    sendTrackingEvent('CCA Modal opened', selection);
                    toggleModal();
                    e.preventDefault();
                })
            })

        function toggleModal() {
            $('#cca').toggleClass('is-active');
            $('html').toggleClass('is-clipped');
        }

        function toggleDayOut() {
            dayOutModalOpen = !dayOutModalOpen;
            var state = (dayOutModalOpen) ? "Open" : "Closed";
            sendTrackingEvent('Your Day Out Modal', state);
            $('#dayout').toggleClass('is-active');
            $('html').toggleClass('is-clipped');        
        }
    });






   
