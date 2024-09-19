import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
    selector: 'app-chat-owner',
    templateUrl: './chat-owner.component.html',
    styleUrls: ['./chat-owner.component.scss']
})
export class ChatOwnerComponent implements OnInit {
    socket = new WebSocket('ws://localhost:3000');
    isVisible = false;
    tempCurrentUser = localStorage.getItem('currentUser');
    currentUser = Number(this.tempCurrentUser);
    
    messagesHistory = [];
    customerMessages = [];
    customerMessage: string = '';
    customerId: number = 0;
    customerName: string = '';

    unreadMessagesCount = 0;

    constructor(
        private chatService: ChatService
    ) {
    }

    ngOnInit() {
        this.socket.onopen = () => {
            console.log('Connected to WebSocket server');
        };

        this.socket.onmessage = (event) => {
            let obj = JSON.parse(event.data);
            // console.log('Received message from server:', obj);
            if(obj?.event === "chat-message") {
                if(obj?.data?.recipient_id == this.currentUser) {
                    this.handleIncomingMessage(obj?.data);
                }
            }
        };
        this.loadChatHistory();
    }

    handleIncomingMessage(message: any): void {
        this.messagesHistory.push(message);
        if (!this.isVisible) {
            this.unreadMessagesCount++;
        }
    }

    loadChatHistory() {
        this.chatService.getChatHistory(this.currentUser, null).subscribe(res => {
            this.messagesHistory = res;
        });
    }

    toggleChat() {
        this.isVisible = !this.isVisible;
        this.unreadMessagesCount = 0;
    }

    sendOwnerMessage() {
        let msgVal = {
            current_user: this.currentUser,
            sender_id: this.currentUser,
            recipient_id: 1,
            content: this.customerMessage,
            read_receipt: true
		}
        this.chatService.sendMessage(msgVal).subscribe(res => {
            if(res) {
                this.socket.send(JSON.stringify({ event: 'chat-message', message: msgVal }));
                this.messagesHistory.push(msgVal);
                this.customerMessage = '';
            }
        });
    }
}
