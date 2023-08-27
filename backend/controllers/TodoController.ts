const todoService = require("../services/TodoService");

const all = async (req: any, res: any): Promise<any> => {
  try {
    const data = await todoService.getAllTodos();
    return res.json({ data: data, status: "success" });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

const view = async (req: any, res: any): Promise<any> => {
  try {
    const userId = req.params.id;
    const data = await todoService.getTodoById(userId);
    return res.json({ data: data, status: "success" });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

const create = async (req: any, res: any): Promise<any> => {
  try {
    const payload = req.body;
    const data = await todoService.createTodo(payload);
    return res.json({ data: data, status: "success" });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

const update = async (req: any, res: any): Promise<any> => {
  try {
    const userId = req.params.id;
    const payload = req.body;
    const data = await todoService.updateTodo(userId, payload);
    return res.json({ data: data, status: "success" });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

const remove = async (req: any, res: any): Promise<any> => {
  try {
    const userId = req.params.id;
    const data = await todoService.deleteTodo(userId);
    return res.json({ data: data, status: "success" });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export default {
  all,
  view,
  create,
  update,
  remove,
};
