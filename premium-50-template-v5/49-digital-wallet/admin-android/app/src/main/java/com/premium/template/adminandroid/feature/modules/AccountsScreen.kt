package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun AccountsScreen(onCreate:()->Unit){Card{Column{Text("Accounts");Text("Domain-specific accounts workflow");Button(onClick=onCreate){Text("Create")}}}}
