using AutoStock.Data;
using AutoStock.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

 

    namespace AutoStock.Controllers
    {

    [ApiController]
    [Route("[controller]")]
    public class ProdutosController : ControllerBase
    {

        private readonly AppDbContext _context;

        public ProdutosController(AppDbContext context)
        {
            _context = context;
        }


        [HttpPost]
        public IActionResult CadastraProduto(Produto produto)
        {

            var sessaoUsuario = HttpContext.Session.GetString("IdLogado");
            if (sessaoUsuario == null)
            {
                return Unauthorized("Faça login Antes");
            }
            var idLogado = Request.Cookies["IdLogado"];
            if (idLogado != null)
                produto.IdUsuario = int.Parse(idLogado);

            _context.Add(produto);
            _context.SaveChanges();
            return Created("", produto);
        }

        [HttpPut("{id}")]
        public IActionResult AtualizaProduto(int id, Produto produto)
        {
            var sessaoUsuario = HttpContext.Session.GetString("IdLogado");
            if (sessaoUsuario == null)
            {
                return Unauthorized("Faça login Antes");
            }

            var produtoDoBanco = _context.Produto.Find(id);
            if (produtoDoBanco == null)
            {
                return NotFound("Produto não existe no banco!");
            }
            produtoDoBanco.Qnt_estoque = produto.Qnt_estoque;
            produtoDoBanco.Nome = produto.Nome;
            produtoDoBanco.Tipo_Produto = produto.Tipo_Produto;
            

            _context.SaveChanges();
            return Ok("Atualizado");
        }

        [HttpDelete("{id}")]
        public IActionResult DeletaProduto(int id)
        {
            var sessaoUsuario = HttpContext.Session.GetString("IdLogado");
            if (sessaoUsuario == null)
            {
                return Unauthorized("Faça login Antes");
            }

            var produtoDoBanco = _context.Produto.Find(id);
            if (produtoDoBanco == null)
            {
                return NotFound("Não encontrado!");
            }
            _context.Remove(produtoDoBanco);
            _context.SaveChanges();
            return Ok("Deletado");
        }
    }

}


