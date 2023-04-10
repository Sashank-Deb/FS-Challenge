import {data} from "../../../public/data"

export default function handler(req, res) {
  if(req.method === 'GET'){
    res.status(200).json(data)
  }
  else if(req.method === 'PUT'){
    const newData= req.body
    let objIndex = data.findIndex((obj =>obj.bill_No == newData.bill_No));
    data[objIndex]= newData
  
    res.status(201).json(newData)
  }
}
