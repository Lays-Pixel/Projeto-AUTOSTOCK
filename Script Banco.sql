Create DataBase AutoStock;
Go
Use AutoStock;
Go

CREATE TABLE Usuario (
    Nome VARCHAR(100),
    Email VARCHAR(100),
    Senha INTEGER,
    Id INTEGER Identity PRIMARY KEY,
    Tipo VARCHAR(100)
);

CREATE TABLE Produto (
    qnt_estoque INTEGER,
    tipo_produto VARCHAR (100),
    Id INTEGER Identity PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE Prateleira (
    Status VARCHAR(50),
    Capacidade VARCHAR(50),
    Id INTEGER Identity PRIMARY KEY
);

CREATE TABLE Entregas (
    Id INTEGER Identity PRIMARY KEY,
    Data_recebimento DATE,
    fk_Usuario_Id_responsavel INTEGER,
    fk_Usuario_Id_receptor INTEGER
);

CREATE TABLE Pedidos_fornecedor (
    Id INTEGER Identity PRIMARY KEY,
    Data_envio DATE,
    Nome_fornecedor VARCHAR(50),
    fk_Usuario_Id INTEGER
);

CREATE TABLE ProdutosNaPrateleira (
    fk_Prateleira_Id INTEGER,
    fk_Produto_Id INTEGER
);

CREATE TABLE ProdutosDoPedido (
    fk_Produto_Id INTEGER,
    fk_Pedidos_fornecedor_Id INTEGER
);

CREATE TABLE PedidosDaEntrega (
    fk_Produto_Id INTEGER,
    fk_Entregas_Id INTEGER
);
 
ALTER TABLE Entregas ADD CONSTRAINT FK_Entregas_1
    FOREIGN KEY (fk_Usuario_Id_responsavel)
    REFERENCES Usuario (Id)
    ON DELETE No action;

    ALTER TABLE Entregas ADD CONSTRAINT FK_Entregas_2
    FOREIGN KEY (fk_Usuario_Id_receptor)
    REFERENCES Usuario (Id)
    ON DELETE No action;
 
ALTER TABLE Pedidos_fornecedor ADD CONSTRAINT FK_Pedidos_fornecedor_2
    FOREIGN KEY (fk_Usuario_Id)
    REFERENCES Usuario (Id)
    ON DELETE No action;
 
ALTER TABLE ProdutosNaPrateleira ADD CONSTRAINT FK_ProdutosNaPrateleira_1
    FOREIGN KEY (fk_Prateleira_Id)
    REFERENCES Prateleira (Id)
    ON DELETE No action;
 
ALTER TABLE ProdutosNaPrateleira ADD CONSTRAINT FK_ProdutosNaPrateleira_2
    FOREIGN KEY (fk_Produto_Id)
    REFERENCES Produto (Id)
    ON DELETE No action;
 
ALTER TABLE ProdutosDoPedido ADD CONSTRAINT FK_ProdutosDoPedido_1
    FOREIGN KEY (fk_Produto_Id)
    REFERENCES Produto (Id)
    ON DELETE No action;
 
ALTER TABLE ProdutosDoPedido ADD CONSTRAINT FK_ProdutosDoPedido_2
    FOREIGN KEY (fk_Pedidos_fornecedor_Id)
    REFERENCES Pedidos_fornecedor (Id)
    ON DELETE No action;
 
ALTER TABLE PedidosDaEntrega ADD CONSTRAINT FK_PedidosDaEntrega_1
    FOREIGN KEY (fk_Produto_Id)
    REFERENCES Produto (Id)
    ON DELETE No action;
 
ALTER TABLE PedidosDaEntrega ADD CONSTRAINT FK_PedidosDaEntrega_2
    FOREIGN KEY (fk_Entregas_Id)
    REFERENCES Entregas (Id)
    ON DELETE No action;

 
USE AutoStock;
GO

-- =====================================
-- USUARIOS
-- =====================================

INSERT INTO Usuario (Nome, Email, Senha, Tipo)
VALUES
('Carlos Mendes', 'carlos.mendes@autostock.com', 1234, 'Administrador'),
('Juliana Rocha', 'juliana.rocha@autostock.com', 2345, 'Almoxarife'),
('Ricardo Alves', 'ricardo.alves@autostock.com', 3456, 'Supervisor'),
('Fernanda Costa', 'fernanda.costa@autostock.com', 4567, 'Recebedor'),
('Paulo Henrique', 'paulo.henrique@autostock.com', 5678, 'Funcionário'),
('Amanda Souza', 'amanda.souza@autostock.com', 6789, 'Funcionário');

GO

-- =====================================
-- PRODUTOS
-- =====================================

INSERT INTO Produto (qnt_estoque, tipo_produto, nome)
VALUES
(150, 'EPI', 'Capacete de Segurança Branco'),
(300, 'EPI', 'Luva de Proteção Anticorte'),
(120, 'EPI', 'Óculos de Segurança Transparente'),
(90, 'EPI', 'Protetor Auricular Silicone'),
(80, 'EPI', 'Máscara Respiratória PFF2'),
(60, 'EPI', 'Botina de Segurança Bico de Aço'),
(110, 'Uniforme', 'Camisa Operacional Azul'),
(75, 'Uniforme', 'Calça Operacional Brim'),
(40, 'Uniforme', 'Jaqueta Refletiva'),
(95, 'Uniforme', 'Colete de Segurança Refletivo'),
(55, 'Uniforme', 'Macacão Industrial'),
(70, 'Uniforme', 'Camiseta Manga Longa UV');

GO

-- =====================================
-- PRATELEIRAS
-- =====================================

INSERT INTO Prateleira (Status, Capacidade)
VALUES
('Disponível', '200'),
('Ocupada', '150'),
('Disponível', '100'),
('Manutenção', '80'),
('Ocupada', '250'),
('Disponível', '120');

GO

-- =====================================
-- ENTREGAS
-- =====================================

INSERT INTO Entregas (
    Data_recebimento,
    fk_Usuario_Id_responsavel,
    fk_Usuario_Id_receptor
)
VALUES
('2026-05-02', 1, 4),
('2026-05-05', 3, 2),
('2026-05-08', 1, 5),
('2026-05-12', 2, 6),
('2026-05-15', 3, 4);

GO

-- =====================================
-- PEDIDOS FORNECEDOR
-- =====================================

INSERT INTO Pedidos_fornecedor (
    Data_envio,
    Nome_fornecedor,
    fk_Usuario_Id
)
VALUES
('2026-04-20', 'Safety Equipamentos LTDA', 1),
('2026-04-28', 'Protec EPI Brasil', 3),
('2026-05-03', 'Uniformes Nordeste', 2),
('2026-05-07', 'WorkWear Solutions', 1),
('2026-05-10', 'Master EPIs', 3);

GO

-- =====================================
-- PRODUTOS NA PRATELEIRA
-- =====================================

INSERT INTO ProdutosNaPrateleira (
    fk_Prateleira_Id,
    fk_Produto_Id
)
VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(2, 5),
(2, 6),
(3, 7),
(3, 8),
(4, 9),
(5, 10),
(5, 11),
(6, 12);

GO

-- =====================================
-- PRODUTOS DO PEDIDO
-- =====================================

INSERT INTO ProdutosDoPedido (
    fk_Produto_Id,
    fk_Pedidos_fornecedor_Id
)
VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 2),
(6, 2),
(7, 3),
(8, 3),
(9, 4),
(10, 4),
(11, 5),
(12, 5);

GO

-- =====================================
-- PEDIDOS DA ENTREGA
-- =====================================

INSERT INTO PedidosDaEntrega (
    fk_Produto_Id,
    fk_Entregas_Id
)
VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 2),
(6, 2),
(7, 3),
(8, 3),
(9, 4),
(10, 4),
(11, 5),
(12, 5);

GO



