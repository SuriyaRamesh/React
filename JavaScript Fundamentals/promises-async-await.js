// Promise
const fetchUserData = () => {
  return fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      console.log(`Name: ${user.name.first} ${user.name.last}`);
      console.log(`Email: ${user.email}`);
      console.log(`Location: ${user.location.city}, ${user.location.country}`);
    })
    .catch(error => console.error('Error:', error));
};
fetchUserData();

// Using async/await (cleaner syntax)
const fetchUserDataAsync = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    console.log(`Name: ${user.name.first} ${user.name.last}`);
    console.log(`Email: ${user.email}`);
    console.log(`Location: ${user.location.city}, ${user.location.country}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchUserDataAsync();

// Promise.all
// ❌ Bad: Sequential execution
const data1 = await fetchFirst();
const data2 = await fetchSecond();

// ✅ Good: Parallel execution
const [data3, data4] = await Promise.all([fetchFirst(), fetchSecond()]);