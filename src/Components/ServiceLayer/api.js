import { videoGalleryUrl,postUserDataUrl, verifyAdminUrl } from "./constants";

export const getLatestVideosData = async () => {
    try {
        const res = await fetch(videoGalleryUrl);
        console.log("response",res)
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error fetching videos from backend:", err);
        return [];
    }
};

export const addNewUserData = async (payload) =>{
    const response = await fetch(postUserDataUrl,{
        method:'POST',
        body:payload
    })
    return await res.json()
}

export const adminVerificationData = async(payload) => {
    const response = await fetch(verifyAdminUrl,payload)
    return await response.json()
}