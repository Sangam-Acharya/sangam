const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > -2) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


document.addEventListener("contextmenu", function (e) {
	e.preventDefault();
  });
  
  document.onkeydown = function (e) {
	if (event.keyCode == 123) {
	  return false;
	}
  
	if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
	  return false;
	}
  
	if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
	  return false;
	}
  
	if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
	  return false;
	}
  };


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class RestrictScreenshot {
    public static void main(String[] args) {
        // Set path to ChromeDriver executable
        System.setProperty("webdriver.chrome.driver", "path_to_chromedriver");

        // Disable headless mode
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-extensions");
        options.addArguments("--disable-gpu");
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");
        options.addArguments("--headless");

        // Initialize ChromeDriver with options
        WebDriver driver = new ChromeDriver(options);

        // Navigate to the website
        driver.get("https://example.com");

        // Additional code for website interactions or testing

        // Close the WebDriver
        driver.quit();
    }
}

