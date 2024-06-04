using API.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Add services to the container.
builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();

app.UseCors(policy =>
                policy.AllowAnyHeader()
                .AllowAnyMethod()
                .WithOrigins("https://localhost:4200"));

// order and placement important!
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

