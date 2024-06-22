const activities = [
    { userId: 'user1', activityType: 'login', timestamp: 1624354520000 },
    { userId: 'user2', activityType: 'signup', timestamp: 1624354620000 },
    { userId: 'user1', activityType: 'logout', timestamp: 1624354720000 },
    { userId: 'user3', activityType: 'login', timestamp: 1624354820000 },
    { userId: 'user2', activityType: 'logout', timestamp: 1624354920000 },
  ];

  function countActivitiesByType(activities) {
    const activityCounts = {};
    activities.forEach(activity => {
      const { activityType } = activity;
      if (activityCounts[activityType]) {
        activityCounts[activityType]++;
      } else {
        activityCounts[activityType] = 1;
      }
    });
    return activityCounts;
  }
  
  // count activity by type:
  console.log(countActivitiesByType(activities));





  //function to count the number of unique users.

  function countUniqueUsers(activities) {
    // Use a Set to store unique userIds
    const uniqueUsers = new Set();
  
    // Iterate through each activity and add userId to the Set
    activities.forEach(activity => {
      uniqueUsers.add(activity.userId);
    });
  
    // Return the size of the Set, which represents the number of unique users
    return uniqueUsers.size;
  }


console.log(countUniqueUsers(activities)); // Output: 3





//function to find the most common activity type.

function findMostCommonActivityType(activities) {
    // Object to store counts of each activity type
    const activityCounts = {};
  
    // Iterate through activities and count each activity type
    activities.forEach(activity => {
      const { activityType } = activity;
      if (activityCounts[activityType]) {
        activityCounts[activityType]++;
      } else {
        activityCounts[activityType] = 1;
      }
    });
  
    // Find the activity type with the highest count
    let mostCommonActivity = null;
    let maxCount = 0;
    for (const activityType in activityCounts) {
      if (activityCounts[activityType] > maxCount) {
        maxCount = activityCounts[activityType];
        mostCommonActivity = activityType;
      }
    }
  
    return mostCommonActivity;
  }
  
  console.log(findMostCommonActivityType(activities)); // Output: "login"




// function to generate a timeline of activities for each user, sorted by timestamp.

  function generateActivityTimeline(activities) {
    // Object to store activities grouped by userId
    const activityTimeline = {};
  
    // Group activities by userId
    activities.forEach(activity => {
      const { userId } = activity;
      if (!activityTimeline[userId]) {
        activityTimeline[userId] = [];
      }
      activityTimeline[userId].push(activity);
    });
  
    // Sort activities for each user by timestamp
    for (const userId in activityTimeline) {
      activityTimeline[userId].sort((a, b) => a.timestamp - b.timestamp);
    }
  
    return activityTimeline;
  }
  
  console.log(generateActivityTimeline(activities));

  