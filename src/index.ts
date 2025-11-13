import express, { Express, Response, Request } from "express";
import { Vehicle } from "./types";

const app: Express = express();
const PORT: number = 3000

app.use(express.json())

let vehicles: Vehicle[] = [
    { id: 1, brand: "Toyota", model: "Hilux", year: 2020, available: true },
    { id: 2, brand: "Chevrolet", model: "Spark", year: 2018, available: false },
];

app.get("/vehicles", (req: Request, res: Response) => {
    res.json(vehicles);
})

app.get("/available-vehicles", (req: Request, res: Response) => {
    const availableVehicles = vehicles.filter(v => v.available);
    res.json(availableVehicles);
})

app.post("/vehicles", (req: Request, res: Response) => {
    const newVehicle: Vehicle = {
        id: vehicles.length ? vehicles[vehicles.length - 1]!.id + 1 : 1,
        available: true, ...req.body,
    };

    vehicles.push(newVehicle);
    res.json({ message: "Vehicle added successfully", vehicles: newVehicle })
})

app.put("/vehicles", (req: Request, res: Response) => {
    const { id, brand, model, year, available } = req.body;
    const index = vehicles.findIndex(v => v.id === id);
    const vehicle: Vehicle = { id, brand, model, year, available };

    if (index !== -1) {
        vehicles[index] = vehicle;
        res.json({ message: "Vehicle updated successfully" })
    } else {
        vehicles.push(vehicle);
        res.json({ message: "Vehicle added successfully" });
    }
})

app.patch("/vehicles", (req: Request<{}, {}, Partial<Vehicle> & { id: number }>, res: Response) => {
    const { id, ...updates } = req.body;
    const vehicle = vehicles.find(v => v.id === id);

    if (!vehicle) {
        return res.status(404).json({ message: "Vehicle not found" });
    }

    Object.assign(vehicle, updates);
    return res.json({ message: "Vehicle partially updated", vehicle });
}
);


app.delete("/vehicles", (req: Request<{}, {}, { id: number }>, res: Response) => {
    const { id } = req.body;
    const index = vehicles.findIndex(v => v.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Vehicle not found" });
    }

    vehicles.splice(index, 1);
    return res.json({ message: "Vehicle deleted successfully" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));