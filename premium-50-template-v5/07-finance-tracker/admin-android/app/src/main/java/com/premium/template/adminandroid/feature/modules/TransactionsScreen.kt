package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun TransactionsScreen(onCreate:()->Unit){Card{Column{Text("Transactions");Text("Domain-specific transactions workflow");Button(onClick=onCreate){Text("Create")}}}}
