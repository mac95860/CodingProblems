// Create a function that takes damage and speed (attacks per second) and returns the amount of damage after a given time.

const damage = (damage, speed, time) => {
   totalDamage = time === "second" ? damage * speed : 
                 time === "minute" ? damage * speed * 60 : 
                 time === "hour" ? damage * speed * 3600 : null
    
    console.log(totalDamage);
}

damage(40, 5, "second"); //200
damage(100, 1, "minute"); // 6000
damage(2, 100, "hour"); // 720000