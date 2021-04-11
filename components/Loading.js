import { Circle } from "better-react-spinkit";

function Loading() {
    return (
        <center>
            <div>
                <img 
                    src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png"
                    alt=""
                    style={{ marginBottom: 10}}
                    height={ 200 }
                />
                <Circle color="#3CBC28" size={60} />
            </div>
        </center>
        
    )
}

export default Loading
