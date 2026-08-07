const expenseNotifications = [
  [
    "🪙 You’re off to a smart start! Budget vibes looking great.",
    "🌱 Slow and steady spending — perfect for long-term savings.",
    "💡 Still early in the month — plan ahead and stay consistent.",
    "✨ Expenses under control — your wallet is proud of you!",
    "🧘‍♂️ Calm spending mode activated — keep it that way.",
  ],
  [
    "🧾 You’ve used about half of your limit — smooth progress so far!",
    "⚖️ Balanced spending! Just keep an eye on upcoming bills.",
    "💰 Nice pace! A little saving now can help later in the month.",
    "🔍 You’re midway through your budget — time for a quick check-in.",
    "📊 Good control so far, just make sure weekend plans don’t go wild!",
  ],
  [
    "🚦Careful now — spending is picking up speed!",
    "💸 You’re entering the orange zone — maybe skip a few non-essentials?",
    "📉 A little high this month — try balancing with a no-spend day.",
    "🤔 You’re spending faster than planned — time to slow down.",
    "💬 Budget whisper: 'Maybe we should chill a bit?'",
  ],
  [
    "⚠️ Uh-oh! You’re getting really close to your monthly limit.",
    "🧮 Almost maxed out — time to pause and reflect.",
    "🚨 Budget warning: Your wallet’s heartbeat just went up!",
    "🫣 Expenses are high — maybe delay non-urgent purchases.",
    "🔥 Careful! You’re on the edge of your monthly limit.",
  ],
  [
    "💥 You’ve crossed your limit — time to investigate where it went!",
    "😬 Overshot the budget — happens to the best of us.",
    "🧠 Lesson time: analyze your top expenses to plan smarter next month.",
    "🕵️‍♀️ Budget detective mode: let’s figure out those sneaky expenses.",
    "💫 A little over the line — don’t worry, next month is a fresh start.",
  ],
  [
    "💸 Wallet: 'Please stop… I can’t take it anymore!' 😂",
    "🤯 Spending spree detected — time for a quick reality check.",
    "🪫 Budget battery drained — recharge with a savings goal next month.",
    "😵‍💫 You’ve gone full YOLO mode — maybe time for a cooldown.",
    "💔 Your budget needs a hug. Let’s get back on track soon!",
  ],
];
const expenseEmojis = ["🟢", "🟡", "🟠", "🔴", "⚡", "🚫"];

export const getExpenseNotification = (expensePercent) => {
  if(!expensePercent)expensePercent=0;
  const index = Math.min(Math.floor(expensePercent / 25), 5);
  
  const group = expenseNotifications[index];
  const message = group[Math.floor(Math.random() * group.length)];
  const expenseEmoji = expenseEmojis[index];

  return { emoji: expenseEmoji, msg: message };
}

const incomeNotifications = [
  [
    "🌤️ A fresh month, new opportunities — income journey just started!",
    "💪 Keep going! More credits will soon roll in.",
    "🪙 Small beginnings lead to great savings — patience pays off!",
    "📈 Just getting started — the month’s income story awaits.",
    "✨ Progress is progress — stay consistent and watch it grow!",
  ],
  [
    "💰 Halfway to your monthly goal — great momentum!",
    "📥 Income flowing in steadily — keep the pace strong!",
    "⚙️ You’re building up nicely — more to come soon.",
    "💼 A solid first half! Let’s push toward the goal.",
    "🪄 Income is shaping up — good work so far!",
  ],
  [
    "🚀 You’re more than halfway to your goal — awesome progress!",
    "💸 Steady inflow detected — great job staying productive!",
    "📊 Earnings look good — almost there!",
    "🌟 Keep that energy! Just a bit more to hit your goal.",
    "💼 Consistency is paying off — literally!",
  ],
  [
    "🎯 Nearly there! One last push and your income goal is done.",
    "💎 You’re close to a full paycheck month — well done!",
    "📈 Just a few steps from your goal — keep the grind strong.",
    "🔥 Amazing! You’re almost at 100% of your expected income.",
    "🏁 Final stretch — you’re wrapping up an impressive month!",
  ],
  [
    "🎉 You’ve surpassed your income goal — outstanding performance!",
    "💥 Overachiever alert — you’re earning beyond expectations!",
    "🌈 Fantastic! You’ve crossed your income goal with style.",
    "💪 Exceeding limits — your hustle speaks for itself.",
    "🏅 You’ve gone above and beyond this month — impressive!",
  ],
  [
    "🤑 Wow! You’ve crushed your income goals — pure excellence!",
    "💼 Record-breaking month — you’re on fire!",
    "🚀 Sky’s the limit! Incredible earning streak.",
    "💫 Your hard work is clearly paying off big time!",
    "🏆 You’re in the elite zone — what a month for income!",
  ],
];

const incomeEmojis = ["🌤️", "💰", "🚀", "🎯", "🏆", "🤑"];

export const getIncomeNotification=(incomePercent) => {
  if(!incomePercent)incomePercent=0;
  const index = Math.min(Math.floor(incomePercent / 25), 5);

  const group = incomeNotifications[index];
  const message = group[Math.floor(Math.random() * group.length)];
  const incomeEmoji = incomeEmojis[index];

  return { emoji: incomeEmoji, msg: message };
}