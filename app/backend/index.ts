type db = {
    json: object;
    xml: Array<object>;
};

const db: db = {
    json: {
    },

    xml: [
        
    ],
};

export function GET(type: string) {
    if(type === "JSON") {
        return db.json;
    }
    
    return db.xml;
};

export function POST({id, value}: {id: string, value: any}) {
    if(typeof window === "undefined") {
        console.log("Dummy")
    } else {
        localStorage.setItem(id, value);
    }
    
    db.xml.push({ id, value});
};