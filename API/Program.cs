using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();

// Add services to the container.
builder.Services.AddDbContext<DataContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));


var app = builder.Build();

app.UseCors(policy =>
                policy.AllowAnyHeader()
                .AllowAnyMethod()
                .WithOrigins("http://localhost:4200"));


app.MapControllers();

app.Run();

