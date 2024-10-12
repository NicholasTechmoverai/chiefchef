var homepagetabs = ['chiefchef-homepage', 'chiefchef-fav', 'chiefchef-profile', 'chiefchef-reel','chiefchef-add-recipe'];

function changetabs(thistab, element) {
    console.log(thistab, element);  

    if (element !== undefined) {  // Ensure element is passed
        
        // Reset all navigation items
        document.querySelectorAll('.navigation-item').forEach(nav => {
            nav.style.color = 'white';
            nav.style.padding = '4px'; 
            nav.style.boxSizing = ''; 
        });

        // Switch case for specific elements
        switch (element) {
            case 0:
                document.querySelectorAll('.btn-add-recipe').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            case 1:
                document.querySelectorAll('.btn-gohome').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            case 2: 
                document.querySelectorAll('.btn-gofav').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            case 3:
                document.querySelectorAll('.btn-goreel').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            case 4:
                document.querySelectorAll('.btn-goprofile').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            default:
                console.error('Tab not found');
                break;
        }

    } else {
        console.error('Element not passed correctly');
    }

    // Handle tab visibility
    if (typeof homepagetabs !== 'undefined' && homepagetabs.length > 0) {
        for (var i = 0; i < homepagetabs.length; i++) {
            if (homepagetabs[i] === thistab) {
                document.getElementById(homepagetabs[i]).style.display = 'flex';
            } else {
                document.getElementById(homepagetabs[i]).style.display = 'none';
            }
        }
    } else {
        console.error('homepagetabs is not defined or empty');
    }
    history.pushState({ containerId: thistab }, null, `#${thistab}`);

    // Listen to popstate for the browser back button or device back button
    window.onpopstate = function(event) {
        if (event.state && event.state.containerId) {
            const containerId = event.state.containerId;

            // Hide all containers
            homepagetabs.forEach(tab => {
                document.getElementById(tab).style.display = 'none';
            });

            // Show the container corresponding to the saved state
            document.getElementById(containerId).style.display = 'flex';
        }
};

        // On page load, check if there's a hash and navigate to the correct tab
        window.onload = function() {
            const hash = location.hash.replace('#', '');
            if (hash && homepagetabs.includes(hash)) {
                changetabs(hash,);
            } else {
                changetabs('chiefchef-homepage',0); // Default to homepage tab
            }
        };
}





document.getElementById("userprofile-more").addEventListener("click", () => {
    const aboutContent = document.getElementById("aboutme-content");
    const aboutMore = document.getElementById("userprofile-more");

    if (aboutContent.style.display === 'flex') {
        aboutContent.style.display = 'none';
        aboutMore.innerHTML = "more...";
    } else {
        aboutContent.style.display = 'flex';
        aboutMore.innerHTML = "less...";
    }
});



//login control
const splash = document.getElementById('chiefchef-splash');
const tutorial = document.getElementById('chiefchef-tutorial');
const login = document.getElementById('chiefchef-login');

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        splash.style.display = 'none';
        tutorial.style.display = 'flex';
    }, 3000);
});

document.getElementById('next-tutorial').addEventListener('click', () => {
    tutorial.style.display = 'none';
    login.style.display = 'flex';
});

document.getElementById('btn-login').addEventListener('click', () => {
    const useremail = document.getElementById('useremail');
    const userpassword = document.getElementById('password');

    if (useremail.value.trim() !== "" ||useremail.value.trim()=="" && userpassword.value.trim() !== "" ||userpassword.value.trim() == "") {
        tutorial.style.display = 'none';
        login.style.display = 'none';
        splash.style.display = 'none';
        changetabs("chiefchef-homepage",1);
    }
    
});


// Update the displayed value when the range slider is changed
const cookTimeRange = document.getElementById('recipe-cook-time');
const cookTimeValue = document.getElementById('cook-time-value');

cookTimeRange.addEventListener('input', function() {
    cookTimeValue.textContent = this.value;
});



// Display the dropdown menu when the user hovers over the dropdown button
const more_on_show = document.getElementById('show-more-ing'); 
more_on_show.addEventListener('click', () => {
    const more_on_ingredient = document.getElementById('more-on-ingredient'); 
   
    if (more_on_ingredient.style.display === 'none' || more_on_ingredient.style.display === '') {
        more_on_ingredient.style.display = 'block'; 
    
    } else {
        more_on_ingredient.style.display = 'none'; // Hide the element if it's already shown
    }
});



//add ingridients in the container

const add_ingredient = document.getElementById('add-ingredient-btn');
    const ingredient_container = document.getElementById('ingridients-list');

    add_ingredient.addEventListener('click', () => {
        const quantity = document.getElementById('quantity-no').value;
        const unit = document.getElementById('unit-no').value;
        const description = document.getElementById('description').value;
        const name = document.getElementById('add-ingridient').value;

        if (quantity && unit &&name ) {
            const newIngredient = document.createElement('li');
            newIngredient.innerHTML = `
                <li class="ingredients-l">
                   <p>${name} <span>${quantity}</span> in <span>${unit}</span></p>
                   <p class="desc">${description}</p>
                </li> 
            `;

            ingredient_container.appendChild(newIngredient);

            document.getElementById('quantity-no').value = '';
            document.getElementById('unit-no').value = '';
            document.getElementById('description').value = '';
            document.getElementById('add-ingridient').value = "";
            document.getElementById('more-on-ingredient').style.display ='none';
        } else {
            alert('Please fill in all fields.');
        }
    });
    


// Function to format time in MM:SS
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

// Function to update the timer and status display
function updateControls(video, timerElem, statusElem) {
    // Update current time and total duration
    timerElem.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;

    // Update play/pause status
    statusElem.textContent = video.paused ? 'Paused' : 'Playing';
}

// Function to play/pause the clicked video and pause others
function toggleVideo(video, timerElem, statusElem) {
    const isPlaying = !video.paused; // Check if the video is currently playing

    // If video is playing, pause it; otherwise, play it
    if (isPlaying) {
        video.pause();
        statusElem.textContent = 'Paused';
    } else {
        // Pause all other videos
        document.querySelectorAll('video').forEach(v => {
            if (v !== video) {
                v.pause();
                v.currentTime = 0; // Reset video to the beginning if you want
                const vTimerElem = document.querySelector(`#timer${v.id.slice(-1)}`);
                const vStatusElem = document.querySelector(`#status${v.id.slice(-1)}`);
                vStatusElem.textContent = 'Paused';
                updateControls(v, vTimerElem, vStatusElem);
            }
        });

        // Play the clicked video and activate audio
        video.muted = false; // Ensure the audio is on
        video.play();
        statusElem.textContent = 'Playing';
    }

    // Update the controls for the clicked video
    updateControls(video, timerElem, statusElem);

    // Update the timer continuously while the video plays
    video.addEventListener('timeupdate', function () {
        updateControls(video, timerElem, statusElem);
    });
}

// Get all video elements and add the click event listener
document.querySelectorAll('video').forEach(video => {
    const timerElem = document.querySelector(`#timer${video.id.slice(-1)}`);
    const statusElem = document.querySelector(`#status${video.id.slice(-1)}`);

    // Video click event to toggle play/pause
    video.addEventListener('click', function () {
        toggleVideo(this, timerElem, statusElem);
    });

    // Display the total duration once the metadata is loaded
    video.addEventListener('loadedmetadata', function () {
        updateControls(video, timerElem, statusElem);
    });

    // Click event for the status text to toggle play/pause
    statusElem.addEventListener('click', function () {
        toggleVideo(video, timerElem, statusElem);
    });
});
