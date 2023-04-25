import { JitsiMeeting } from '@jitsi/react-sdk';

function JitsiPage() {
    return (
        <JitsiMeeting
            roomName = { 'RandomRoomName1234567890' } // hastaId-hastaAdi-hastaSoyadi-gun-ay-yil-saat-Random6HaneliSayi
            getIFrameRef = { node => node.style.height = '800px' }
        />
    );
}

export default JitsiPage;