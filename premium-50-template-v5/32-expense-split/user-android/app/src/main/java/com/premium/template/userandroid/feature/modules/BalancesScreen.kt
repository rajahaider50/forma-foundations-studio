package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun BalancesScreen(onCreate:()->Unit){Card{Column{Text("Balances");Text("Domain-specific balances workflow");Button(onClick=onCreate){Text("Create")}}}}
