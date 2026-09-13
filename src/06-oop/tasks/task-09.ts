/**
 * A school LMS needs to send notifications to students.
 * The system supports three notification types:
 * - Email, example:
 * --------------------------------------------------
 * To: student@example.com
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - SMS, example:
 * --------------------------------------------------
 * To: +628123456789
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - Push Notification, example:
 * --------------------------------------------------
 * Device: ST001
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * Tasks:
 * - Create class Notification with property "message" and method "send()"
 * - Create children class of Notification such as EmailNotification, SMSNotification, PushNotification
 * - each child should override "send()"
 */

class Notification {
    constructor(
        public message: string
    ) { }
    send(): void {
        console.log(`Mengirim pesan: ${this.message}`)
    }
}
class EmailNotification extends Notification {
    constructor(
        public email: string,
        message: string
    ) {
        super(message)
    }
    send(): void {
        console.log("--------------------------------------------------");
        console.log(`To: ${this.email}`);
        console.log(`Message: ${this.message}`);
        console.log("--------------------------------------------------");
    }
}

class SMSNotification extends Notification {
    constructor(
        public phoneNumber: string,
        message: string
    ) {
        super(message)
    }
    send(): void {
        console.log("--------------------------------------------------");
        console.log(`To: ${this.phoneNumber}`);
        console.log(`Message: ${this.message}`);
        console.log("--------------------------------------------------");
    }
}

class PushNotification extends Notification {
    constructor(
        public Device: string,
        message: string
    ) {
        super(message)
    }
    send(): void {
        console.log("--------------------------------------------------");
        console.log(`Device: ${this.Device}`);
        console.log(`Message: ${this.message}`);
        console.log("--------------------------------------------------");
    }
}

const emailNotification = new EmailNotification("student@example.com", "Your assignment has been graded.")
const smsNotification = new SMSNotification("+628123456789", "Your assignment has been graded.")
const pushNotification = new PushNotification("ST001", "Your assignment has been graded.")

const notifications: Notification[] = [
    emailNotification,
    smsNotification,
    pushNotification
];

for (const notification of notifications) {
    notification.send();
}