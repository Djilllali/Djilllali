const { execSync } = require('child_process');

function commitAndPush() {
  const now = new Date();
  const timestamp = now.toISOString(); // Generate timestamp
  const commitMessage = `Fixed random`;

  execSync(`echo "${commitMessage}" >> xeroxba.txt`); // Appending timestamp to a file

  execSync('git add .');
  execSync(`git commit -m "${commitMessage}"`);
  execSync('git push origin master'); // Change 'main' to your branch name if needed
}

function scheduleDailyExecution() {
  const now = new Date();
  const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 22, 0, 0); // Set target time to 13:05

  // Calculate time until the next occurrence of the target time
  let timeUntilNextExecution = targetTime - now;
  if (timeUntilNextExecution < 0) {
    // If the target time has already passed today, schedule it for tomorrow
    timeUntilNextExecution += 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  }

  // Schedule the first execution
  setTimeout(function () {
    commitAndPush();

    // Schedule subsequent executions every 24 hours
    setInterval(commitAndPush, 24 * 60 * 60 * 1000);
  }, timeUntilNextExecution);
}

// Start scheduling daily execution
scheduleDailyExecution();
