// document.addEventListener('DOMContentLoaded', function() {
//     const scrollContainer = document.getElementById('CONTAINER');
//     const sectionOneVids = document.getElementById('Video1');
//
//     if (!scrollContainer) {
//         console.error('Scrollable container not found');
//         return;
//     }
//
//     // Add some logging to check if the container and videos are found
//     console.log('Scroll container:', scrollContainer);
//     console.log('Videos found:', sectionOneVids);
//
//     if (sectionOneVids) {
//         console.error('No videos found with the class .video');
//         return;
//     }
//
//     var videoObserver = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             console.log('IntersectionObserver entry:', entry);
//             if (entry.isIntersecting) {
//                 console.log('Video in view, playing:', entry.target);
//                 entry.target.play();
//                 entry.target.classList.add('show');
//             } else {
//                 console.log('Video out of view, pausing:', entry.target);
//                 entry.target.pause();
//             }
//         });
//     }, {
//         root: scrollContainer,
//         threshold: 0.5 // Adjust as needed
//     });
//
//     sectionOneVids.forEach((el) => {
//         console.log('Observing video:', el);
//         videoObserver.observe(el);
//     });
//
//     // Manually trigger observer update on scroll
//     scrollContainer.addEventListener('scroll', function() {
//         console.log('Scroll event triggered');
//         sectionOneVids.forEach((el) => {
//             videoObserver.observe(el);
//         });
//     });
// });
//
//
// // document.addEventListener('DOMContentLoaded', function() {
// //     $('video').each(function(){
// //         if ($(this).is(":in-viewport")) {
// //             $(this)[0].play();
// //         } else {
// //             $(this)[0].pause();
// //         }
// //     })});