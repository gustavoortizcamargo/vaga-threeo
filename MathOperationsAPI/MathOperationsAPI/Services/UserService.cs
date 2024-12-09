using MathOperationsAPI.Models;
using Newtonsoft.Json;

public class UserService
{
    private readonly string _filePath;

    public UserService(string filePath)
    {
        _filePath = filePath;
    }

    public User? GetUser(string email, string password)
    {
        var users = ReadUsersFromFile();
        return users.FirstOrDefault(u => u.Email == email && u.Password == password);
    }

    private List<User> ReadUsersFromFile()
    {
        if (!File.Exists(_filePath))
        {
            return new List<User>();
        }

        var json = File.ReadAllText(_filePath);
        return JsonConvert.DeserializeObject<List<User>>(json);
    }
}