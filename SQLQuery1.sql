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
    tipo_produto VARCHAR,
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
    Data_recebimento VARCHAR(100),
    fk_Usuario_Id_responsavel INTEGER,
    fk_Usuario_Id_receptor INTEGER
);

CREATE TABLE Pedidos_fornecedor (
    Id INTEGER Identity PRIMARY KEY,
    Data_envio VARCHAR,
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