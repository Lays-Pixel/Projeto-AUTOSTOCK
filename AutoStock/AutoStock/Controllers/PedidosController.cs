using AutoStock.Data;
using AutoStock.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AutoStock.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class PedidosController : ControllerBase
    {

        private readonly AppDbContext _context;

        public PedidosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
            public IActionResult CadastraPedidos(Pedido pedidos)
            {

                var sessaoUsuario = HttpContext.Session.GetString("IdLogado");
                if (sessaoUsuario == null)
                {
                    return Unauthorized("Faça login Antes");
                }
                var idLogado = Request.Cookies["IdLogado"];
                if (idLogado != null)

                    _context.Add(pedidos);
                _context.SaveChanges();
                return Created("", pedidos);
            }

            [HttpPut("{id}")]
            public IActionResult AtualizaProduto(int id, Pedido pedidos)
            {
                var sessaoUsuario = HttpContext.Session.GetString("IdLogado");
                if (sessaoUsuario == null)
                {
                    return Unauthorized("Faça login Antes");
                }

                var pedidoDoBanco = _context.Pedidos.Find(id);
                if (pedidoDoBanco == null)
                {
                    return NotFound("Este pedido não existe no banco!");
                }
                pedidoDoBanco.DataRecebimento = pedidos.DataRecebimento;
                pedidoDoBanco.alocado_prateleira = pedidos.alocado_prateleira;
                pedidoDoBanco.Nome_Produto = pedidos.Nome_Produto;


                _context.SaveChanges();
                return Ok("Atualizado");
            }
        }
    }
