# IMF Gadget API

Welcome to the **Impossible Missions Force (IMF) Gadget API**! This API is designed to securely manage the inventory of gadgets used by IMF agents. Built with Node.js, Express, and PostgreSQL, it provides endpoints for managing gadgets, including retrieving their details, adding new gadgets, updating existing ones, and decommissioning them. Additionally, it includes a fun self-destruct feature for gadgets.

---

## **Features**

- **Gadget Inventory Management**:
  - Retrieve a list of all gadgets with a randomly generated "mission success probability" percentage.
  - Add a new gadget with a unique, randomly generated codename.
  - Update an existing gadget's information.
  - Decommission a gadget (soft delete) with a timestamp.

- **Self-Destruct Sequence**:
  - Trigger a self-destruct sequence for a specific gadget with a randomly generated confirmation code.

- **Filter Gadgets by Status**:
  - Retrieve gadgets based on their status (`Available`, `Deployed`, `Destroyed`, `Decommissioned`).

- **Authentication and Authorization**:
  - Secure API endpoints using JWT (JSON Web Tokens).

---

## **Tech Stack**

- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JWT
- **Deployment**: Render

---

## **API Endpoints**

### **Gadget Endpoints**

| Method | Endpoint                  | Description                                                                 |
|--------|---------------------------|-----------------------------------------------------------------------------|
| GET    | `/gadgets`                | Retrieve a list of all gadgets with mission success probability.            |
| GET    | `/gadgets?status={status}`| Retrieve gadgets filtered by status.                                        |
| POST   | `/gadgets`                | Add a new gadget with a unique codename.                                    |
| PATCH  | `/gadgets/{id}`           | Update an existing gadget's information.                                    |
| DELETE | `/gadgets/{id}`           | Decommission a gadget (marks it as "Decommissioned" with a timestamp).      |

### **Self-Destruct Endpoint**

| Method | Endpoint                          | Description                                                                 |
|--------|-----------------------------------|-----------------------------------------------------------------------------|
| POST   | `/gadgets/{id}/self-destruct`     | Trigger the self-destruct sequence for a specific gadget.                   |

---

## **Setup Instructions**

### **Prerequisites**

- Node.js (v16 or higher)
- PostgreSQL
- Git

### **Steps**

1. Clone the repository:
   ```bash
   git clone https://github.com/abdurrohit/gadgets007.git
   cd imf-gadget-api