global class Exporter implements System.Schedulable {
    global void execute(SchedulableContext sc) {
        ApexPages.PageReference report = new ApexPages.PageReference('/00Oi0000006fPvf?csv=1');
        Messaging.EmailFileAttachment attachment = new Messaging.EmailFileAttachment();
        attachment.setFileName('report.csv');
        attachment.setBody(report.getContent());
        attachment.setContentType('text/csv');
        Messaging.SingleEmailMessage message = new Messaging.SingleEmailMessage();
        message.setFileAttachments(new Messaging.EmailFileAttachment[] { attachment } );
        message.setSubject('Report');
        message.setPlainTextBody('The report is attached.');
        message.setToAddresses( new String[] { 'brian.zardus@res-group.com' } );
        Messaging.sendEmail( new Messaging.SingleEmailMessage[] { message } );
    }
}