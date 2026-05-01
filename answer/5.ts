type TicketStatus = 'open' | 'in_progress' | 'closed';

interface Ticket {
    id: string;
    status: TicketStatus;
    title: string;
}

const ALLOWED_TRANSITIONS: Record<TicketStatus, TicketStatus[]> = {
    'open': ['in_progress'],
    'in_progress': ['closed'],
    'closed': []
}

function updateTicketStatus(ticket: Ticket, nextStatus: TicketStatus): Ticket {
    const { status: currentStatus } = ticket;

    if (currentStatus === nextStatus) {
        return ticket;
    }

    const possibleNextStates = ALLOWED_TRANSITIONS[currentStatus];

    if (possibleNextStates.includes(nextStatus)) {
        return { ...ticket, status: nextStatus };
    }

    return ticket;
}