document.getElementById('menu-icon').addEventListener('click', function(event) {
    var dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

document.addEventListener('click', function(event) {
    var dropdownMenu = document.getElementById('dropdown-menu');
    var menuIcon = document.getElementById('menu-icon');
    if (event.target !== menuIcon && event.target !== dropdownMenu && !dropdownMenu.contains(event.target) && !(event.target.tagName === 'A' && dropdownMenu.contains(event.target.parentNode))) {
        dropdownMenu.style.display = 'none';
    }
});




// Select the cart elements
const cartSection = document.querySelector('.cart-section');
const cartList = document.querySelector('#cart-list');
const cartTotal = document.querySelector('#cart-total');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Define an array to store the cart items
let cartItems = [];

// Function to update the cart total
function updateCartTotal() {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to add an item to the cart
function addToCart(item) {
  cartItems.push(item);
  updateCartTotal();
  renderCartList();
}

// Function to remove an item from the cart
function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCartTotal();
  renderCartList();
}

// Function to render the cart list
function renderCartList() {
  cartList.innerHTML = '';
  cartItems.forEach((item, index) => {
    const cartItemHTML = `
      <li>
        <span>${item.name}</span>
        <span>$${item.price}</span>
        <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
      </li>
    `;
    cartList.innerHTML += cartItemHTML;
  });
}

// Add event listeners to the add to cart buttons
addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = {
      name: button.dataset.name,
      price: parseFloat(button.dataset.price),
    };
    addToCart(item);
  });
});



// Add a checkout button
const checkoutButton = document.querySelector('#checkout-btn');

// Function to handle checkout
function checkout() {
  // Display a "Thank You" message
  const thankYouMessage = document.querySelector('#thank-you-message');
  thankYouMessage.textContent = 'Thank You for your purchase!';
  thankYouMessage.style.display = 'block';

  // Show the bill
  const billContainer = document.querySelector('#bill-container');
  billContainer.style.display = 'block';

  // Calculate and display the total bill
  const totalBill = cartItems.reduce((acc, item) => acc + item.price, 0);
  const billText = `Your total bill is: $${totalBill.toFixed(2)}`;
  const billElement = document.querySelector('#bill');
  billElement.textContent = billText;

  // Clear the cart
  cartItems = [];
  updateCartTotal();
  renderCartList();
}

// Add an event listener to the checkout button
checkoutButton.addEventListener('click', checkout);


// for search :
const searchInput = document.getElementById('search-input');
const cityList = document.getElementById('city-list');
const restaurantList = document.getElementById('restaurant-ul');
const cities = [
'Bangalore','Gurgaon','Hyderabad','Delhi','Mumbai','Pune',
'Chennai','Kolkata','Ahmedabad','Jaipur','Chandigarh','Lucknow',
'Noida','Bhubaneswar','Indore','Surat','Nagpur','Kanpur',
'Patna','Vadodara','Thane','Bhopal','Visakhapatnam','Ludhiana',
'Agra','Nashik','Faridabad','Meerut','Rajkot','Kalyan',
'Vasai-Virar','Varanasi','Srinagar','Aurangabad','Dhanbad','Amritsar',
'Navi Mumbai','Allahabad','Ranchi','Howrah','Coimbatore','Jabalpur',
'Gwalior','Vijayawada','Jodhpur','Madurai','Raipur','Kota',
'Guwahati','Chandrapur','Solapur','Hubballi-Dharwad','Mysuru','Tiruchirappalli',
'Bareilly','Aligarh','Tiruppur','Moradabad','Bhiwandi','Kolhapur',
'Jalandhar','Warangal','Mira-Bhayandar','Guntur','Bhiwani','Durgapur',
'Bikaner','Amravati','Jamshedpur','Ujjain','Saharanpur','Siliguri',
'Salem','Ajmer','Ghaziabad','Mathura','Gandhinagar','Kurnool',
'Erode','Rourkela','Anantapur','Ahmednagar','Jammu','Mangalore',
'Sagar','Kolhapur','Nanded','Bilaspur','Cuttack','Jhansi',
'Panipat','Darbhanga','Bhilai','Bharatpur','Thiruvananthapuram','Bhubaneswar',
'Ranchi','Tirupati','Agartala','Bokaro Steel City','Dehradun','Aizawl',
'Thanjavur','Sambalpur','Gaya','Purnia','Kakinada','Korba',
'Bhavnagar','Pondicherry','Bettiah','Shivamogga','Raichur','Hapur',
'Vellore','Sangli','Akola','Palghar','Puducherry','Shillong',
'Muzaffarpur','Nellore','Udaipur','Belgaum','Hosur','Mysore',
'Tumkur','Durg','Gulbarga','Thrissur','Gandhidham','Kozhikode',
'Kollam','Kurnool','Mathura','Patiala','Ambala','Karimnagar',
'Dhule','Nadiad','Jamnagar','Bathinda','Bijapur','Haldia',
'Nizamabad','Parbhani','Tumakuru','Rewa','Gurugram','Muzaffarnagar',
'Saharanpur',
'Udaipur','Jodhpur','Kota','Bikaner','Ajmer','Alwar','Bharatpur','Bhilwara','Sikar','Chittorgarh','Jaisalmer','Barmer','Bundi','Tonk','Nagaur','Pali','Sawai Madhopur','Dausa','Jhalawar','Baran','Dungarpur','Banswara','Hanumangarh','Sri Ganganagar','Karauli','Churu'


];

  
const restaurants = [
{city: 'Bangalore', name: 'Kanha Sweets'},
{city: 'Bangalore', name: 'Corner House'},
{city: 'Gurgaon', name: 'Bikanervala'},
{city: 'Gurgaon', name: 'Haldiram'},
{city: 'Hyderabad', name: 'Karachi Bakery'},
{city: 'Hyderabad', name: 'Paradise Biryani'},
{city: 'Delhi', name: 'Sitaram Diwan Chand'},
{city: 'Delhi', name: 'Bengali Sweet House'},
{city: 'Mumbai', name: 'Leopold Cafe'},
{city: 'Mumbai', name: 'Taj Mahal Tea House'},
{city: 'Pune', name: 'Chitale Bandhu'},
{city: 'Pune', name: 'Kayani Bakery'},
{city: 'Chennai', name: 'Adyar Ananda Bhavan'},
{city: 'Chennai', name: 'Murugan Idli Shop'},
{city: 'Kolkata', name: 'Flurys'},
{city: 'Kolkata', name: 'Mitra Cafe'},
{city: 'Ahmedabad', name: 'Agashiye'},
{city: 'Ahmedabad', name: 'Gopi Dining Hall'},
{city: 'Jaipur', name: 'LMB'},
{city: 'Jaipur', name: 'Rawat Mishtan Bhandar'},
{city: 'Chandigarh', name: 'Nik Baker'},
{city: 'Chandigarh', name: 'Indian Coffee House'},
{city: 'Lucknow', name: 'Tunday Kababi'},
{city: 'Lucknow', name: 'Ratti Lal’s Khasta'},
{city: 'Noida', name: 'Theos'},
{city: 'Noida', name: 'Binge'},
{city: 'Bhubaneswar', name: 'Dalma'},
{city: 'Bhubaneswar', name: 'Nandankanan'},
{city: 'Indore', name: 'Sarafa Bazaar'},
{city: 'Indore', name: 'Chappan Dukan'},
{city: 'Surat', name: 'Gopal Locho'},
{city: 'Surat', name: 'Sasumaa'},
{city: 'Nagpur', name: 'Haldiram’s'},
{city: 'Nagpur', name: 'Param Sweets'},
{city: 'Kanpur', name: 'Thaggu Ke Laddu'},
{city: 'Kanpur', name: 'Banarsi Tea Stall'},
{city: 'Patna', name: 'Biryani Mahal'},
{city: 'Patna', name: 'Ramna Sweet House'},
{city: 'Vadodara', name: 'Maji Sainik Vadapav'},
{city: 'Vadodara', name: 'Havmor'},
{city: 'Thane', name: 'Mamledar Misal'},
{city: 'Thane', name: 'Prashant Corner'},
{city: 'Bhopal', name: 'Manohar Dairy'},
{city: 'Bhopal', name: 'Bapu Ki Kutia'},
{city: 'Visakhapatnam', name: 'Bamboo Bay'},
{city: 'Visakhapatnam', name: 'Dolphin Hotel'},
{city: 'Ludhiana', name: 'Lovely Sweets'},
{city: 'Ludhiana', name: 'Basant Ice Cream'},
{city: 'Agra', name: 'Deviram Sweets'},
{city: 'Agra', name: 'Panchi Petha'},
{city: 'Nashik', name: 'Sadhana Misal'},
{city: 'Nashik', name: 'Sayantara'},
{city: 'Faridabad', name: 'Anupam Sweets'},
{city: 'Faridabad', name: 'Surya Sweets'},
{city: 'Meerut', name: 'Jain Shikanji'},
{city: 'Meerut', name: 'Paras Dairy'},
{city: 'Rajkot', name: 'Jay Jalaram'},
{city: 'Rajkot', name: 'Limbdi Wala’s Khakhra'},
{city: 'Kalyan', name: 'Zaika Restaurant'},
{city: 'Kalyan', name: 'Prashant Corner'},
{city: 'Vasai-Virar', name: 'Cafe Vrindavan'},
{city: 'Vasai-Virar', name: 'Bharat Bakery'},
{city: 'Varanasi', name: 'Blue Lassi'},
{city: 'Varanasi', name: 'Kashi Chat Bhandar'},
{city: 'Srinagar', name: 'Ahdoos'},
{city: 'Srinagar', name: 'Mughal Darbar'},
{city: 'Aurangabad', name: 'Tara Pan Centre'},
{city: 'Aurangabad', name: 'Yalla Yalla'},
{city: 'Dhanbad', name: 'Jharia Sweets'},
{city: 'Dhanbad', name: 'Khalsa Restaurant'},
{city: 'Amritsar', name: 'Kesar Da Dhaba'},
{city: 'Amritsar', name: 'Gian Di Lassi'},
{city: 'Navi Mumbai', name: 'Bikanervala'},
{city: 'Navi Mumbai', name: 'Jhama Sweets'},
{city: 'Allahabad', name: 'Hira Halwai'},
{city: 'Allahabad', name: 'Netram Mulchand'},
{city: 'Ranchi', name: 'Capitol Residency'},
{city: 'Ranchi', name: 'Kaveri Restaurant'},
{city: 'Howrah', name: 'Annapurna Sweets'},
{city: 'Howrah', name: 'Golden Spoon'},
{city: 'Coimbatore', name: 'Shree Anandhaas'},
{city: 'Coimbatore', name: 'Sree Annapoorna'},
{city: 'Jabalpur', name: 'Indian Coffee House'},
{city: 'Jabalpur', name: 'Roopali Restaurant'},
{city: 'Gwalior', name: 'SS Kachoriwala'},
{city: 'Gwalior', name: 'Bahadura Sweets'},
{city: 'Vijayawada', name: 'Babai Hotel'},
{city: 'Vijayawada', name: 'Sweet Magic'},
{city: 'Jodhpur', name: 'Janta Sweet Home'},
{city: 'Jodhpur', name: 'Gypsy Restaurant'},
{city: 'Madurai', name: 'Murugan Idli Shop'},
{city: 'Madurai', name: 'Kumar Mess'},
{city: 'Raipur', name: 'Manju Mamta'},
{city: 'Raipur', name: 'Punjabi Rasoi'},
{city: 'Kota', name: 'Ratan Mishtan Bhandar'},
{city: 'Kota', name: 'Jodhpur Namkeen Bhandar'},
{city: 'Guwahati', name: 'Paradise'},
{city: 'Guwahati', name: 'Gopal Maharaj'},
{city: 'Chandrapur', name: 'Gulab Sweets'},
{city: 'Chandrapur', name: 'Spicy Tadka'},
{city: 'Solapur', name: 'Hotel Surya'},
{city: 'Solapur', name: 'Priyadarshini Indrayani'},
{city: 'Hubballi-Dharwad', name: 'Basaveshwar Khanavali'},
{city: 'Hubballi-Dharwad', name: 'Shree Krishna Bhavan'},
{city: 'Mysuru', name: 'Guru Sweets'},
{city: 'Mysuru', name: 'Mylari Hotel'},
{city: 'Tiruchirappalli', name: 'Banana Leaf'},
{city: 'Tiruchirappalli', name: 'Hotel Kannappa'},
{city: 'Bareilly', name: 'Khaana Khazana'},
{city: 'Bareilly', name: 'Moti Mahal Delux'},
{city: 'Aligarh', name: 'Deviram Sweets'},
{city: 'Aligarh', name: 'Brijwasi Sweets'},
{city: 'Tiruppur', name: 'Hotel Annapoorna'},
{city: 'Tiruppur', name: 'Dindigul Thalappakatti'},
{city: 'Moradabad', name: 'New Tasty Restaurant'},
{city: 'Moradabad', name: 'Nawab’s Restaurant'},
{city: 'Bhiwandi', name: 'Lucky Restaurant'},
{city: 'Bhiwandi', name: 'Delicacy Restaurant'},
{city: 'Kolhapur', name: 'Opal Restaurant'},
{city: 'Kolhapur', name: 'Dehati'},
{city: 'Jaipur', name: 'LMB'},
{city: 'Jaipur', name: 'Rawat Mishtan Bhandar'},
{city: 'Jaipur', name: 'Tapri Central'},
{city: 'Udaipur', name: 'Ambrai'},
{city: 'Udaipur', name: 'Jheel’s Ginger Coffee Bar and Bakery'},
{city: 'Udaipur', name: 'Natraj Dining Hall'},
{city: 'Jodhpur', name: 'Janta Sweet Home'},
{city: 'Jodhpur', name: 'Gypsy Restaurant'},
{city: 'Jodhpur', name: 'Shandar Sweet House'},
{city: 'Kota', name: 'Ratan Mishtan Bhandar'},
{city: 'Kota', name: 'Jodhpur Namkeen Bhandar'},
{city: 'Kota', name: 'Maheshwari Restaurant'},
{city: 'Bikaner', name: 'Chhotu Motu Joshi Sweet Shop'},
{city: 'Bikaner', name: 'Bhikharam Chandmal Bhujiawala'},
{city: 'Bikaner', name: 'Laxmi Misthan Bhandar'},
{city: 'Ajmer', name: 'Mango Masala'},
{city: 'Ajmer', name: 'Shankar Chaat Bhandar'},
{city: 'Ajmer', name: 'Prithviraj Restaurant'},
{city: 'Alwar', name: 'Prem Pavitra Bhojnalaya'},
{city: 'Alwar', name: 'Alwar Sweets'},
{city: 'Alwar', name: 'Dawat Restaurant'},
{city: 'Bharatpur', name: 'Shree Ji Mishthan Bhandar'},
{city: 'Bharatpur', name: 'Atithi Restaurant'},
{city: 'Bharatpur', name: 'Kishan Restaurant'},
{city: 'Bhilwara', name: 'New Mahaveer Restaurant'},
{city: 'Bhilwara', name: 'Manuhar Dining Hall'},
{city: 'Bhilwara', name: 'Laxmi Restaurant'},
{city: 'Sikar', name: 'Shri Kalyan Sweets'},
{city: 'Sikar', name: 'Ajay Restaurant'},
{city: 'Sikar', name: 'Sankalp Restaurant'},
{city: 'Chittorgarh', name: 'Mango Restaurant'},
{city: 'Chittorgarh', name: 'Gangour Restaurant'},
{city: 'Chittorgarh', name: 'Hotel Pratap Palace'},
{city: 'Jaisalmer', name: 'Desert Boy’s Dhani'},
{city: 'Jaisalmer', name: 'Trio Restaurant'},
{city: 'Jaisalmer', name: 'Free Tibet Restaurant'},
{city: 'Barmer', name: 'Maharaja Restaurant'},
{city: 'Barmer', name: 'Vijay Restaurant'},
{city: 'Barmer', name: 'Hotel Kailash International'},
{city: 'Bundi', name: 'Baori Haveli'},
{city: 'Bundi', name: 'Ringo Star Hotel'},
{city: 'Bundi', name: 'Lake View Restaurant'},
{city: 'Tonk', name: 'Sethi Restaurant'},
{city: 'Tonk', name: 'Hotel Apsara'},
{city: 'Tonk', name: 'Bhawani Restaurant'},
{city: 'Nagaur', name: 'Sunder Misthan Bhandar'},
{city: 'Nagaur', name: 'Royal Restaurant'},
{city: 'Nagaur', name: 'Mahadev Dhaba'},
{city: 'Pali', name: 'Lalbagh Restaurant'},
{city: 'Pali', name: 'Mahaveer Restaurant'},
{city: 'Pali', name: 'Choudhary Misthan Bhandar'},
{city: 'Tonk', name: 'Sethi Restaurant'},
{city: 'Tonk', name: 'Hotel Apsara'},
{city: 'Tonk', name: 'Bhawani Restaurant'},
{city: 'Sawai Madhopur', name: 'Manisha Restaurant'},
{city: 'Sawai Madhopur', name: 'The Food Court Restaurant'},
{city: 'Sawai Madhopur', name: 'Ram Sham Restaurant'},
{city: 'Dausa', name: 'Hotel Highway Tadka'},
{city: 'Dausa', name: 'Prem Pavitra Bhojanalaya'},
{city: 'Dausa', name: 'Shri Ram Restaurant'},
{city: 'Jhalawar', name: 'Gopal Restaurant'},
{city: 'Jhalawar', name: 'Prakash Misthan Bhandar'},
{city: 'Jhalawar', name: 'Soni Bhojanalaya'},
{city: 'Baran', name: 'Patidar Restaurant'},
{city: 'Baran', name: 'Vijay Restaurant'},
{city: 'Baran', name: 'Shri Balaji Restaurant'},
{city: 'Dungarpur', name: 'Hotel Mewad'},
{city: 'Dungarpur', name: 'New Heeralal'},
{city: 'Dungarpur', name: 'Lake City Restaurant'},
{city: 'Banswara', name: 'Rajasthan Restaurant'},
{city: 'Banswara', name: 'Vrindavan Restaurant'},
{city: 'Banswara', name: 'Manohar Restaurant'},
{city: 'Hanumangarh', name: 'Bhukhad Restaurant'},
{city: 'Hanumangarh', name: 'Hotel Midway'},
{city: 'Hanumangarh', name: 'Lajwaab Restaurant'},
{city: 'Sri Ganganagar', name: 'Hotel Skylark'},
{city: 'Sri Ganganagar', name: 'Saffron Restaurant'},
{city: 'Sri Ganganagar', name: 'Grand Dine Restaurant'},
{city: 'Karauli', name: 'Hotel Karauli Palace'},
{city: 'Karauli', name: 'Shree Krishna Restaurant'},
{city: 'Karauli', name: 'Surya Restaurant'},
{city: 'Churu', name: 'Maheshwari Restaurant'},
{city: 'Churu', name: 'Bharti Restaurant'},
{city: 'Churu', name: 'Mahalaxmi Restaurant'},
{city: 'Bundi', name: 'Baori Haveli'},
{city: 'Bundi', name: 'Ringo Star Hotel'},
{city: 'Bundi', name: 'Lake View Restaurant'},
{city: 'Tonk', name: 'Sethi Restaurant'},
{city: 'Tonk', name: 'Hotel Apsara'},
{city: 'Tonk', name: 'Bhawani Restaurant'},
{city: 'Kota', name: 'Ratan Mishtan Bhandar'},
{city: 'Kota', name: 'Jodhpur Namkeen Bhandar'},
{city: 'Kota', name: 'Maheshwari Restaurant'},
{city: 'Barmer', name: 'Maharaja Restaurant'},
{city: 'Barmer', name: 'Vijay Restaurant'},
{city: 'Barmer', name: 'Hotel Kailash International'},
{city: 'Alwar', name: 'Prem Pavitra Bhojnalaya'},
{city: 'Alwar', name: 'Alwar Sweets'},
{city: 'Alwar', name: 'Dawat Restaurant'},
{city: 'Jaisalmer', name: 'Desert Boy’s Dhani'},
{city: 'Jaisalmer', name: 'Trio Restaurant'},
{city: 'Jaisalmer', name: 'Free Tibet Restaurant'},
{city: 'Bharatpur', name: 'Shree Ji Mishthan Bhandar'},
{city: 'Bharatpur', name: 'Atithi Restaurant'},
{city: 'Bharatpur', name: 'Kishan Restaurant'},
{city: 'Bhilwara', name: 'New Mahaveer Restaurant'},
{city: 'Bhilwara', name: 'Manuhar Dining Hall'},
{city: 'Bhilwara', name: 'Laxmi Restaurant'},
{city: 'Nagaur', name: 'Sunder Misthan Bhandar'},
{city: 'Nagaur', name: 'Royal Restaurant'},
{city: 'Nagaur', name: 'Mahadev Dhaba'},
{city: 'Sikar', name: 'Shri Kalyan Sweets'},
{city: 'Sikar', name: 'Ajay Restaurant'},
{city: 'Sikar', name: 'Sankalp Restaurant'},
{city: 'Chittorgarh', name: 'Mango Restaurant'},
{city: 'Chittorgarh', name: 'Gangour Restaurant'},
{city: 'Chittorgarh', name: 'Hotel Pratap Palace'},
{city: 'Dungarpur', name: 'Hotel Mewad'},
{city: 'Dungarpur', name: 'New Heeralal'},
{city: 'Dungarpur', name: 'Lake City Restaurant'},
{city: 'Banswara', name: 'Rajasthan Restaurant'},
{city: 'Banswara', name: 'Vrindavan Restaurant'},
{city: 'Banswara', name: 'Manohar Restaurant'},
{city: 'Hanumangarh', name: 'Bhukhad Restaurant'},
{city: 'Hanumangarh', name: 'Hotel Midway'},
{city: 'Hanumangarh', name: 'Lajwaab Restaurant'},
{city: 'Sri Ganganagar', name: 'Hotel Skylark'},
{city: 'Sri Ganganagar', name: 'Saffron Restaurant'},
{city: 'Sri Ganganagar', name: 'Grand Dine Restaurant'},
{city: 'Karauli', name: 'Hotel Karauli Palace'},
{city: 'Karauli', name: 'Shree Krishna Restaurant'},
{city: 'Karauli', name: 'Surya Restaurant'},
{city: 'Churu', name: 'Maheshwari Restaurant'},
{city: 'Churu', name: 'Bharti Restaurant'},
{city: 'Churu', name: 'Mahalaxmi Restaurant'}

  ];

  

// Update the search functionality to use the unique cities and restaurants
// Extract unique cities from the restaurants array
const uniqueCities = [...new Set(restaurants.map(restaurant => restaurant.city))];

// Update the search functionality to use the unique cities and restaurants
searchInput.addEventListener('input', (e) => {
  const userInput = e.target.value.toLowerCase();
  const filteredCities = uniqueCities.filter((city) => city.toLowerCase().includes(userInput));
  cityList.innerHTML = '';
  filteredCities.forEach((city) => {
    const option = document.createElement('option');
    option.value = city;
    cityList.appendChild(option);
  });

  // Filter restaurants based on searched city
  const filteredRestaurants = restaurants.filter((restaurant) => restaurant.city.toLowerCase().includes(userInput));
  restaurantList.innerHTML = '';
  if (filteredRestaurants.length === 0) {
    const noResultsMessage = document.createElement('li');
    noResultsMessage.textContent = 'No restaurants found';
    restaurantList.appendChild(noResultsMessage);
  } else {
    filteredRestaurants.forEach((restaurant) => {
      const listItem = document.createElement('li');
      listItem.textContent = restaurant.name;
      restaurantList.appendChild(listItem);
    });
  }
});