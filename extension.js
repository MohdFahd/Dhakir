const vscode = require('vscode');

// Interval for notifications: 30 minutes
const INTERVAL = 30 * 60 * 1000; // 30 minutes

let intervalId;
const messages = [
'فاذكروني أذكركم واشكروا لي ولا تكفرون',
'من قال: لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، في يوم مائة مرة، كانت له عدل عشر رقاب. ',
'اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور.',
'أعوذ بكلمات الله التامات من شر ما خلق.',
'الذين آمنوا وتطمئن قلوبهم بذكر الله ألا بذكر الله تطمئن القلوب',
'اللهم إني أسألك العفو والعافية في الدنيا والآخرة.',
'اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت.',
'واذكر ربك في نفسك تضرعًا وخيفة ودون الجهر من القول بالغدو والآصال ولا تكن من الغافلين',
'من قال حين يصبح وحين يمسي: رضيت بالله ربا، وبالإسلام دينًا، وبمحمد ﷺ نبيًا، كان حقًا على الله أن يرضيه.',
'اللهم ما أصبح بي من نعمة أو بأحد من خلقك فمنك وحدك لا شريك لك، فلك الحمد ولك الشكر.',
'بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.',
'اللهم أنت ربي لا إله إلا أنت، عليك توكلت وأنت رب العرش العظيم.',
'سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته.',
'فسبح بحمد ربك وكن من الساجدين',
'اللهم إني أصبحت أشهدك، وأشهد حملة عرشك، وملائكتك، وجميع خلقك، أنك أنت الله لا إله إلا أنت، وحدك لا شريك لك، وأن محمدًا عبدك ورسولك',
'اللهم إني أسألك خير هذا اليوم، فتحه ونصره، ونوره وبركته.',
'اللهم اجعلني من التوابين واجعلني من المتطهرين.',
'اللهم اغفر لي ذنبي، ووسع لي في داري، وبارك لي فيما رزقتني.',
'سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر.',
'اللهم إني أعوذ بك من الكسل وسوء الكبر.',
'اللهم إني أعوذ بك من الهم والحزن، والعجز والكسل، والبخل والجبن، وضلع الدين وغلبة الرجال.',
'واذكر ربك إذا نسيت وقل عسى أن يهديني ربي لأقرب من هذا رشدًا',
'حسبي الله لا إله إلا هو، عليه توكلت، وهو رب العرش العظيم.',
'اللهم إني أسألك علماً نافعاً، ورزقاً طيباً، وعملاً متقبلاً.',
'اللهم إني أعوذ بك من جهد البلاء، ودرك الشقاء، وسوء القضاء، وشماتة الأعداء.',
'واذكر اسم ربك وتبتل إليه تبتيلاً',
'فاصبر على ما يقولون وسبح بحمد ربك قبل طلوع الشمس وقبل غروبها',
'اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل.',
'اللهم اغفر لأبي وارحمه، وعافه واعف عنه، وأكرم نزله، ووسع مدخله',
'اللهم اغفر لجميع موتى المسلمين، الذين شهدوا لك بالوحدانية، ولنبيك بالرسالة',
'لا إله إلا أنت سبحانك إني كنت من الظالمين.',
];

function activate(context) {
    console.log('Congratulations, your extension "dhakir" is now active!');

    // Start notifications automatically with the predefined interval
    startNotifications(INTERVAL);

    // Register the command in case you want to keep it for other purposes
    const disposable = vscode.commands.registerCommand('dhakir.setInterval', function () {
        vscode.window.showInformationMessage('Auto notifications are set to every 30 seconds.');
    });

    context.subscriptions.push(disposable);
}

function startNotifications(interval) {
    if (intervalId) {
        clearInterval(intervalId);
    }

    let messageIndex = 0;

    intervalId = setInterval(() => {
        vscode.window.showInformationMessage(messages[messageIndex]);
        messageIndex = (messageIndex + 1) % messages.length;
    }, interval);
}

function deactivate() {
    if (intervalId) {
        clearInterval(intervalId);
    }
}

module.exports = {
    activate,
    deactivate
};
