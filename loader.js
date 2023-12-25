const { execSync } = require('child_process');

function commitAndPush() {
  const now = new Date();
  const commitMessage = `Fixed random at ${now.toISOString()}`;

  execSync(`echo "${commitMessage}" >> xeroxba.txt`);
  execSync('git add .');
  execSync(`git commit -m "${commitMessage}"`);
  execSync('git push origin master'); // Change 'main' to your branch name if needed
}

// Execute the first one immediately
commitAndPush();

// Schedule subsequent executions every minute
setInterval(commitAndPush, 60 * 1000);
